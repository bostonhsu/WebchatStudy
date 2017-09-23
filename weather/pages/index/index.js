var defaultcity,getweather,gettemp,getwind,getpic,city,weather,temp,wind
Page
({
    data:
    {             
    },
  //默认载入
 onLoad:function(e){
    var that=this
 defaultcity='北京'
  wx.request
      ({
        url: 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=1a3cde429f38434f1811a75e1a90310c&location='+defaultcity,  
      success: function(res)
         {  
             getweather=res.data.results[0].weather_data[0].weather
             gettemp=res.data.results[0].weather_data[0].temperature
             getwind=res.data.results[0].weather_data[0].wind
             getpic=res.data.results[0].weather_data[0].dayPictureUrl
              that.setData   
              ({                  
              city:defaultcity,     
              weather:getweather,
              temp:gettemp,
              wind:getwind,
              pic:getpic
              })    
        }     
    })
 },

    //获取输入
     bindKeyInput: function(e)
      {
    defaultcity=e.detail.value
       },

    //搜索城市
    search:function(e)
    {
      var that=this
      wx.request
      ({
        url: 'https://api.map.baidu.com/telematics/v3/weather?output=json&ak=1a3cde429f38434f1811a75e1a90310c&location='+defaultcity,           
        
      success: function(res)
          {
           getweather=res.data.results[0].weather_data[0].weather
            gettemp=res.data.results[0].weather_data[0].temperature
            getwind=res.data.results[0].weather_data[0].wind
            getpic=res.data.results[0].weather_data[0].dayPictureUrl
              that.setData   
              ({                  
              city:defaultcity,     
              weather:getweather,
              temp:gettemp,
              wind:getwind,
              pic:getpic  
              })    
        }  
       })
    }   
})