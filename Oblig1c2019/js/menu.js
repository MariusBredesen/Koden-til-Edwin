fetch('js/menu.json')                                 // hent inn meny fra menu.json  OBS! json-filer skal strengt tatt ikke ha kommentar selv
  .then(res=>res.json())                              // resultat til json
  .then(data=>
    {
      let menu = document.querySelector('nav ul');    // hent inn referanse til menu
      data.forEach((menuItem, idx)=>                  // gå gjennom menyelementene i res.json
        {                                             
          let li = document.createElement('li');      // lag menyelement
          let active = '';
          if (idx==0)
            {                                         // om element er aktiv (main-text default)
              active = ' class="active"';
        
            }
                                                                            
      li.innerHTML = `<a data-id='${menuItem.id}' href=""${active}>${menuItem.html}</a>`;  // legg til linken som innerHTML i menuyelementet
      menu.appendChild(li);                                                                // legg til menyelementet i menyen
      document.querySelectorAll('nav>ul a').forEach(a=> 
        {
          a.addEventListener("click", function(event)                                      // setter menyvalg aktiv eller passiv og
            {                                                                              // setter menyknapp aktiv eller passiv
              event.preventDefault();
              document.querySelectorAll('body>section>section').forEach(section=>
                {
                  if(section.id==event.target.dataset.id)
                    {
                      section.classList.add('active');
                    } else
                    {
                      section.classList.remove('active');
                    }

                })
                  document.querySelectorAll('nav a').forEach(menuItem=>
                    {
                      if (menuItem==event.target)
                        {
                          menuItem.classList.add('active');
                        } else
                        {
                          menuItem.classList.remove('active');
                        }
                    })
                    
            })
        })
        })
    });
