function getNullOrDate(dateString){
    if(dateString===null){
      return null;
    } else {
      return new Date(dateString);
    }
}
function calcCurrentSubStep(workflow) {
  if(workflow['nonsearch-end'] === null){
    return 1;
  } else if(workflow['search-end'] === null){
    return 2;
  } else {
    return 3;
  }

}