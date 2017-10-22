/**
 * Created by SONG on 2017/10/20.
 */
export function upLoadMore(element,callback) {
  let timer;
  element.addEventListener('scroll',(event)=>{
    if(timer) clearTimeout(timer);
    timer=setTimeout(()=>{
      let scrollTop = element.scrollTop;
      console.log(scrollTop);
      let winHeight = element.clientHeight;
      let content = element.scrollHeight;
      if(scrollTop+winHeight+300>=content){
        callback();
      }
    },300)

  })
}
