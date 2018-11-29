import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{id: string}> {

}

const Post: React.SFC<Props> = ({match}) => {

  return (
    <div>
      ポスト {match.params.id}
    </div>
  );
};

export default Post;
