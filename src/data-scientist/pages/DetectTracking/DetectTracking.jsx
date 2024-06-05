import './DetectTracking.css'
import Navbar from '../../components/Navbar/Navbar';
import DetectList from '../../components/DetectList/DetectList';

import {Stack} from "@mui/material";


const DetectTracking = () => {
  return (
    <Stack direction="row">
        <Navbar />
        <DetectList />
    </Stack>
  )
}

export default DetectTracking;
