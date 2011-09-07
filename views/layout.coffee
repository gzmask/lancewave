doctype 5
html ->
  head ->
    title 'Express Coffee with CoffeeKup'
    meta charset: 'utf-8'

    title "#{@title} | lancewave" if @title?
    meta(name: 'description', content: @description) if @description?
    link(rel: 'canonical', href: @canonical) if @canonical?

    link rel: 'stylesheet', href: '/style.css'

    script src: 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js'
    script src: '/lancewave.js'

    style '''
      header, nav, section, article, aside, footer {display: block}
      nav li {display: inline; margin:10px}
      nav.sub {float: right}
      #content {margin-left: 120px}
    '''
  body ->
      header ->
        a href: '/', title: 'Home', -> 'Home'

        nav ->
          ul ->
            for item in ['About', 'Projects', 'Contact']
              li -> a href: "/#{item.toLowerCase()}", title: item, -> item

      div id: 'content', ->
        @body

      footer ->
        p -> a href: '/privacy', -> 'Privacy Policy'

