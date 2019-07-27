var n = 9;

for(i = 0;i < n; i++){
  for(h = 0;h < n; h++){
    if(i == h || h == h+1 || i == h+2 || h == h+3 || i == h+4 || h == h+5
       || i == h+6 || h == h+7 || i == h+8 || h == h-1 || i == h-2
      || i == h-4 || i == h-6 || i == h-8){
      document.write(' + ')
    } else{
      document.write(' - ')
    }
  }
  document.write('<br>')
}