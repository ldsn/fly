import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import Layout from '../components/Layout';
import Config from '../components/Config';



function ConfigPage({ content, id, dispatch }) {
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
        <Config { ...props }/>
    </Layout>
  );
}

ConfigPage.propTypes = {};



export default connect(({ config }) => {
  return { ...config }
})(ConfigPage);
