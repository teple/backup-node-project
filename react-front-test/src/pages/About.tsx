import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as QueryString from 'query-string';

interface Props extends RouteComponentProps<{name: string}> {

}

const About: React.SFC<Props> = ({location, match}) => {

  const query = QueryString.parse(location.search);
  const detail = query.detail === 'true';

  return (
    <div>
      <h2>
        About {match.params.name}
        {detail && 'detail: dsasaa'}
      </h2>
    </div>
  );
}

export default About;