
    <script>
        const content = [
            {
                "title":"hola",
                "text":"hola manola",
                "image":"https://elcomercio.pe/resizer/FM1n9ITb-PIZKYXT2UaDQfFPAjE=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7FAHAWJOKNBONJ4J42E7UW3LCU.jpg"
            },
            {
                "title":"hola2",
                "text":"hola manola",
                "image":"https://cdn.cnn.com/cnnnext/dam/assets/220802110622-james-webb-cartwheel-galaxy-0802-crop-super-169.jpg"
            }
        ];
    </script>
    
    <div class="card card-carousel overflow-hidden h-100 p-0">
      <div id="carouselExampleCaptions" class="carousel slide h-100" data-bs-ride="carousel">
        
        <div class="carousel-inner border-radius-lg h-100">
            {#each content as el}
          <div class="carousel-item h-100 active" style="background-image: url('{el.image}'); background-size: cover;">
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                <i class="ni ni-camera-compact text-dark opacity-10"></i>
              </div>
              <h5 class="text-white mb-1">{el.title}</h5>
              <p>{el.text}</p>
            </div>
          </div>
          {/each}
        </div>
        <button class="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>