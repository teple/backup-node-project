import * as React from "react";
import { Link, Route, RouteComponentProps } from "react-router-dom";
import { Post } from "pages";

interface Props extends RouteComponentProps {

}

const Posts: React.SFC<Props> = ({match}) => {

  return (
    <div>
      <h2>ポストリスト</h2>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>ぽすと　いち</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>ぽすと　に</Link>
        </li>
        <li>
          <Link to={`${match.url}/3`}>ぽすと　さん</Link>
        </li>
        <li>
          <Link to={`${match.url}/4`}>ぽすと　し</Link>
        </li>
      </ul>
      <Route
        exact={true}
        path={match.url}
        render={()=>(<h3>ぽすとを選択してください</h3>)}
      />
      <Route
        path={`${match.url}/:id`}
        component={Post}
      />
    </div>
  );
};

export default Posts;
