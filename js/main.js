$(document).ready(function(){
if(window.location.href.indexOf('index')> -1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1600,
        responsive:true
      });

}
if(window.location.href.indexOf('index')> -1){
      var posts = [
        {
            title:'Prueba de titulo 1',
            date: 'Publicado el dia ' + moment().date() + ' de ' +moment().format('MMMM')+ ' del '+ moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto autem. Alias exercitationem est ut qui numquam fugit saepe consequatur at assumenda eveniet libero quo magni, obcaecati unde distinctio perspiciatis?'
        },
        {
            title:'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().date() + ' de ' +moment().format('MMMM')+ ' del '+ moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto autem. Alias exercitationem est ut qui numquam fugit saepe consequatur at assumenda eveniet libero quo magni, obcaecati unde distinctio perspiciatis?'
        },
        {
            title:'Prueba de titulo 3',
            date: 'Publicado el dia ' + moment().date() + ' de ' +moment().format('MMMM')+ ' del '+ moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto autem. Alias exercitationem est ut qui numquam fugit saepe consequatur at assumenda eveniet libero quo magni, obcaecati unde distinctio perspiciatis?'
        },
        {
            title:'Prueba de titulo 4',
            date: 'Publicado el dia ' + moment().date() + ' de ' +moment().format('MMMM')+ ' del '+ moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto autem. Alias exercitationem est ut qui numquam fugit saepe consequatur at assumenda eveniet libero quo magni, obcaecati unde distinctio perspiciatis?'
        },
        {
            title:'Prueba de titulo 5',
            date: 'Publicado el dia ' + moment().date() + ' de ' +moment().format('MMMM')+ ' del '+ moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto autem. Alias exercitationem est ut qui numquam fugit saepe consequatur at assumenda eveniet libero quo magni, obcaecati unde distinctio perspiciatis?'
        },
        
      ]
      posts.forEach((item,index)=>{
        var post= `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="button-more">Leer mas</a>
        </article>
        `;
        $('#posts').append(post)
      })
    }
    var theme= $('#theme')
      $('#to-green').click(function(){
        theme.attr('href', 'css/green.css')
      })
      $('#to-red').click(function(){
        theme.attr('href', 'css/red.css')
      })
      $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css')
      })

      $('.subir').click(function(e){
          e.preventDefault()
          $('html, body').animate({
              scrollTop:0
          },500)
          return false
      })

      $('#login form').submit(function(){
          var form_name = $('#form_name').val()

          localStorage.setItem('form_name',form_name)
      })

      var form_name= localStorage.getItem('form_name')
      
      if(form_name != null && form_name != 'undefined'){
          var about_parrafo= $('#about p')
          about_parrafo.html('<br><strong>Bienvenido, ' +form_name +'</strong>')
          about_parrafo.append("<a href='#' id='logout'> Cerrar Sesion </a>")

        $('#login').hide()

        $('#logout').click(function(){
            localStorage.clear()
            location.reload()
        })
      }
      if(window.location.href.indexOf('about')> -1){
      $('#acordeon').accordion()
    }

    if(window.location.href.indexOf('reloj')> -1){
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss")

            $('#reloj').html(reloj)
            
        },1000)
    }
    if(window.location.href.indexOf('contact')> -1){
    $("form input[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        })
    $.validate({
        lang:'es',
        errorMessagePosition:'top',
        scrollToTopOnError: true
    })
}
})