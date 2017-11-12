import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import Layout from '../components/Layout';
import List from '../components/ConfigList';



function ConfigList({ list, dispatch }) {
  const props = {
    del(id) {
      dispatch({type:'configList/del', payload: id})
    },

    edit(id) {
      // alert(id)
    }
  }
  return ( 
    <Layout>
        <List list = { list } { ...props }/>
    </Layout>
  );
}

ConfigList.propTypes = {};



export default connect(({ configList }) => {
  return { ...configList }
})(ConfigList);
