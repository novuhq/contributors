import { axios } from '../../../helpers/axios';
import { Layout } from '../../components/layout/layout';
import * as styles from './contributor.module.scss';

const Contributor = ({
  pageResources: {
    json: {
      serverData: { contributor },
    },
  },
}) => {
  return (
    <Layout>
      <div className={
        // @ts-ignore
        styles.wrapper}>
          {contributor.github}
          {contributor.twitter}
      </div>
    </Layout>
  );
};

export async function getServerData(context) {
  const contributor = await axios.get('/contributor/' + context.params.id);

  return {
    props: {
      contributor: contributor.data,
    },
  };
}

export default Contributor;
