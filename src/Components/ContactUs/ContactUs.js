import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <section>
    <h2 class='text-center my-3 py-3'>Contact Us</h2>
    <div class="container mb-3">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class='h-100'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.639900244679!2d73.88005874477427!3d18.53450867529489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13a474750af%3A0xd3918d9919c527ed!2sNakshatra%20Astronomy%20Club!5e0!3m2!1sen!2sin!4v1635488109314!5m2!1sen!2sin"
              width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" title="map"></iframe>
          </div>
        </div>
        <div class="col-md-6 contact-form__wrapper p-5 order-lg-1">
          <form action="#" class="contact-form form-validate" novalidate="novalidate">
            <div class="row">
              <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label class="required-field" for="firstName">First Name</label>
                  <input type="text" class="form-control" id="firstName" name="firstName" placeholder="John"/>
                </div>
              </div>

              <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Doe"/>
                </div>
              </div>

              <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label class="required-field" for="email">Email</label>
                  <input type="text" class="form-control" id="email" name="email" placeholder="abc@example.com"/>
                </div>
              </div>

              <div class="col-sm-6 mb-3">
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" class="form-control" id="phone" name="phone" placeholder="(+91) 1234540545"/>
                </div>
              </div>

              <div class="col-sm-12 mb-3">
                <div class="form-group">
                  <label class="required-field" for="message">How can we help?</label>
                  <textarea class="form-control" id="message" name="message" rows="4" placeholder="Hi there, I would like to....."></textarea>
                </div>
              </div>

              <div class="col-sm-12 mb-3 text-center">
                <button type="submit" name="submit" class="btn btn-success">Submit</button>
              </div>

            </div>
          </form>
        </div>
        {/* <!-- End Contact Form Wrapper --> */}
      </div>
    </div>
  </section>
        </div>
    )
}

export default ContactUs
