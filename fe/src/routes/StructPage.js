import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import Layout from '../components/Layout';



function StructPage({ content, id, dispatch }) {
  const props = {
    content,
    del() {
      dispatch({type:'configList/del', payload: id})
    },
    save(content) {
      dispatch({type:'config/del', payload: {id,content}})
    }
  }
  return ( 
    <Layout>
    </Layout>
  );
}

StructPage.propTypes = {};



export default connect(({ config }) => {
  return { ...config }
})(StructPage);
