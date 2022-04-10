import moment from 'moment';

export function dateToText(timestamp) {
  return timestamp ? moment(timestamp).format('DD.MM.YYYY') : ''; 
}

export function distanceToText(distance, leftZero) {
  if (!distance) {
    return '';
  }
  
  let result = distance.toFixed(1);
  if (leftZero && result.length === 3) {
    result = '0' + result; 
  }
  return result;
}

export function dateTyping(prev, value) {
  if (prev.length < value.length) {
    if (!/\d$/.test(value) || value.length > 10) {
      return value.slice(0, value.length - 1);
    } 
    
    switch (value.length) {
      case 2:
        return value + '.';      
      case 3:
        return value.slice(0, value.length - 1) + '.' + value[value.length - 1];
      case 5:
        return value + '.20';
      case 6:
        return value.slice(0, value.length - 1) + '.20' + value[value.length - 1];
      default:
        return value;
    }
  } 

  if (prev.length > value.length) {
    switch (value.length) {
      case 3:     
        return value.slice(0, value.length - 1);       
      case 8:
        return value.slice(0, value.length - 3);       
      default:
        return value;
    }
  }

  return value;
}


export function distanceTyping(prev, value) {
  if (prev.length < value.length) {
    if (!/\d$/.test(value) || value.length > 4) {
      return value.slice(0, value.length - 1);
    } 

    switch (value.length) {
      case 2:
        return value + '.';      
      case 3:
        return value.slice(0, value.length - 1) + '.' + value[value.length - 1];
      default:
        return value;
    }    
  } 

  if (prev.length > value.length) {
    switch (value.length) {
      case 3:     
        return value.slice(0, value.length - 1);              
      default:
        return value;
    }
  }

  return value;
}

export function dateToInt(str) {
  if (!moment(str, 'DD.MM.YYYY').isValid()) {
    return null;
  }
  return moment(str, 'DD.MM.YYYY').unix() * 1000;
}

export function distanceToInt(str) {
  let result = Number.parseFloat(str);
  if(isNaN(result)) {
    return null;
  }

  result = +result.toFixed(1);
  if ((result < 0) || (result > 99.9)) {
    result = null;
  }

  return result;
}
