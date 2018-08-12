const INRFormat = (nStr) => { 
     nStr += '';
     let x = nStr.split('.');
     let x1 = x[0];
     let x2 = x.length > 1 ? '.' + x[1] : '';
     let rgx = /(\d+)(\d{3})/;
     let z = 0;
     let len = String(x1).length;
     let num = parseInt((len/2)-1);
 
      while (rgx.test(x1))
      {
        if(z > 0)
        {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        else
        {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
          rgx = /(\d+)(\d{2})/;
        }
        z++;
        num--;
        if(num == 0)
        {
          break;
        }
      }
     return x1 + x2;
 }

 export default INRFormat;