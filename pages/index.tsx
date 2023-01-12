import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import type { NextPage } from 'next';
import axios from 'axios';

//const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get('http://localhost:3000/api/post');
  console.log(response.data.name);
  return {
    props: {},
  };
};

export default Home;
