let BinarySearch= function (arr, x, start, end) {
    
    if (start > end) 
        return false;
 
    let mid=Math.floor((start + end)/2);
    if (arr[mid]===x) 
        return true;
    if(arr[mid] > x)
        return BinarySearch(arr, x, start, mid-1);
    else
        return BinarySearch(arr, x, mid+1, end);
}
  

let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
  
if (BinarySearch(arr, x, 0, arr.length-1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");