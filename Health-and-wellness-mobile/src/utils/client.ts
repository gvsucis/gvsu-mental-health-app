import axios from 'axios'
import { GuideTiles } from '../stores/models/data_models';
const server = "http://localhost:2600";

export interface SystemData {
    guideTiles: GuideTiles[]
}

export const getData = async() => {
    const resp = await axios.get(server);
    let dat: SystemData = resp.data;
    return { data: dat }
}