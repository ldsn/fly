import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Layout from '../components/Layout';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Layout>
        
      </Layout>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
