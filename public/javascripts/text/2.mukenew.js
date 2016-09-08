/**
 * Created by lanouhn on 16/9/1.
 */
var http = require("http");
var url = 'http://www.imooc.com/video/7965';
var cheerio = require('cheerio');
//解析函数
function filterChapters (html){
    var $ = cheerio.load(html);
    var chapters = $('.learnchapter');
    var courseData = [];
    chapters.each(function(item){
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle:chapterTitle,
            videos:[]
        }
        videos.each(function(item){
            var video = $(this).find('.studyvideo');
            var videoTitle = video.text();
            var id = video.attr('href').split('video/')[1];
            chapterData.videos.push({
                title:videoTitle,
                id:id
            })
        })
        courseData.push(chapterData);
    })
    return courseData;
  /*  [{
        chapterIitle:'',
        title:'',
        id:''
    }]*/
};
function printCourseInfo(courseData){
    courseData.forEach(function(item){
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle+'\n');
        item.videos.forEach(function (video) {
            console.log('['+video.id+']'+video.title+'\n');
        });
    });
}

http.get(url,function (res){
    var html = '';

    res.on('data',function(data) {
        html+=data;
    });
    res.on('end',function(){
     var courseData =  filterChapters(html);
     printCourseInfo(courseData);
    });
}).on('error',function(){
    console.log('获取出错');
});/**
 * Created by lanouhn on 16/9/1.
 */
