import React from "react";
import Panel from "../../Panel";
import Skeleton from "../../Skeleton";

import { Container } from "./styles";

const LoadingFeedShare: React.FC = () => {
  return (
    <Container className="no-shadow">
      <Panel>
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
      </Panel>
    </Container>
  );
};

export default LoadingFeedShare;
