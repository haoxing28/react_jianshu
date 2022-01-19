import {CHANEG_DETAIL_DATA} from '../constant'
import axios from 'axios'

const changeDetailData = (title, content) => ({
    type: CHANEG_DETAIL_DATA,
    title,
    content
})

export const getDetailInfo = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetailData(result.title, result.content))
        }).catch(()=> {
            console.log('error')
        })
    }
}
   