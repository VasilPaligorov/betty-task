import { css } from "@emotion/css";

export const container = css({
    display: "flex",
    flexDirection: "row",
    scrollBehavior: "smooth",
    width: "100%",
    height: "100%",
    // overflow: "auto",
});

export const imageStyle = css({
    width: "100%",
    height: "auto",
    flexShrink: 0,
});
