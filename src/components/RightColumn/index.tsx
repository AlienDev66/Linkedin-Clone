import React from "react";

import TrendingPanel from "./TrendingPanel";

import { Container } from "./styles";
import LoadingTrendingPanel from "../Shimmer/LoadingTrendingPanel";

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <LoadingTrendingPanel />
      ) : (
        <>
          <TrendingPanel />
          <TrendingPanel />
        </>
      )}
    </Container>
  );
};

export default RightColumn;
