export default function orderByProps(data, firstKeys) {
    const result = [];
  
    for (let i = 0; i < firstKeys.length; i++) {
      const key = firstKeys[i];
      if (data.hasOwnProperty(key)) {
        result.push({
          key,
          value: data[key],
        });
      }
    }
  
    // Проходим по всем свойствам объекта, которые не входят в firstKeys
    for (const key in data) {
      if (data.hasOwnProperty(key) && !firstKeys.includes(key)) {
        result.push({
          key,
          value: data[key],
        });
      }
    }
  
    return result;
  }