import { graphql } from 'gatsby';

export default function Main({data}) {
  return <div>{JSON.stringify(data)}</div>;
}

export async function getServerData() {
  const res = graphql`
    query blogListQuery($page: Int!) {
      apollo {
        contributors(page: $page) {
          list {
            activities_count
            name
            title
            github
            totalPulls
            totalLast3MonthsPulls
          }
        }
      }
    }
  `;

  return {
    props: {
      contributors: res,
    },
  }
}
