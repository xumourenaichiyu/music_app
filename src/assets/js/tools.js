import moment from 'moment';
//破万的数字格式化
export function formatNumber(n){
    let number = n;
    if(number>=10000){
        number = parseInt(number/1000)/10+'万'
    }
    return number
}

//格式化时间
export function formatTime(t,type){
    let time = t;
    return moment(time).format(type)
}