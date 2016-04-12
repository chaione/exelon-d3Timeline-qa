function getNullOrDate(dateString){
    if(dateString===null){
      return null;
    } else {
      return new Date(dateString);
    }
}