import { Box, Button, Flex } from "@chakra-ui/react";
import * as d3 from "d3";
import { OrgChart } from "d3-org-chart";
import React, { useLayoutEffect, useRef, useState } from "react";
// @ts-ignore
const TreeChart = (props: any) => {
  const containerRef = useRef(null);

  let compact = 0;
  useLayoutEffect(() => {
    // @ts-ignore
    let chart: any;
    let chartData = props.data;
    console.log(chartData, "data");

    console.log(chartData, "chartData");
    if (containerRef.current && props.data) {
      setTimeout(() => {
        chart = new OrgChart()
          .container(containerRef.current ? containerRef.current : "")
          .data(chartData)
          .nodeWidth(() => 200)
          .nodeHeight(() => 60)
          .childrenMargin(() => 50)
          .compactMarginBetween(() => 55)
          .compactMarginPair(() => 30)
          .neighbourMargin(() => 20)
          .initialZoom(0.6)
          .compact(!!compact++)
          .render()
          .fit()
          .linkUpdate(function (d: any) {
            // @ts-ignore
            d3.select(this)
              .attr("stroke", (d: any) =>
                d.data._upToTheRootHighlighted
                  ? "#a6dd40"
                  : d.data.level == 2
                  ? "#286CF7"
                  : d.data.level == 1
                  ? "#F1923A"
                  : "#000"
              )
              .attr("stroke-width", (d: any) =>
                d.data._upToTheRootHighlighted ? 3 : 3
              );

            if (d.data._upToTheRootHighlighted) {
              // @ts-ignore
              d3.select(this).raise();
            }
          })

          .nodeContent(function (d: any) {
            d3.selectAll(".node-foreign-object").on("click", (d: any) => {
              chart.clearHighlighting();
              chart.setUpToTheRootHighlighted(d.data.id).render();
            });
            d3.selectAll(".node-rect").attr("display", "none");
            return `
<div class="card">
        <div class="profile-img">
            <image src="${d?.data?.profileImage}" />
        </div>
        <div class="info">
            <p class="emp-name">${
              d?.data?.firstname + " " + d?.data?.lastname
            }</p>
            <p class="emp-role">${d?.data?.role.roleName}</p>
        </div>
    </div>
`;
          })
          .render();
      }, 500);
    }
  }, [props.data]);

  return (
    <Box>
      <Box ref={containerRef}></Box>
    </Box>
  );
};
export default TreeChart;
