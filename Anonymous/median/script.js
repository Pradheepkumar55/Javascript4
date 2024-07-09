function findMedianSortedArrays(nums1, nums2) {
    
    let merged = mergeSortedArrays(nums1, nums2);
    const length = merged.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
      
      return (merged[mid - 1] + merged[mid]) / 2;
    } else {
      
      return merged[mid];
    }
  }
  
  function mergeSortedArrays(nums1, nums2) {
    let merged = [];
    let i = 0, j = 0;
    
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
        merged.push(nums1[i]);
        i++;
      } else {
        merged.push(nums2[j]);
        j++;
      }
    }
    while (i < nums1.length) {
      merged.push(nums1[i]);
      i++;
    }
    
    while (j < nums2.length) {
      merged.push(nums2[j]);
      j++;
    }
    
    return merged;
  }
  
  let nums1 = [1, 3, 5];
  let nums2 = [2, 4, 6];
  
  let median = findMedianSortedArrays(nums1, nums2);
  console.log("Median:", median); 
  