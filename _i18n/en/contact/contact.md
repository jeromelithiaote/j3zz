
<form id="my-form" action="https://formspree.io/f/{{ site.form_id }}" method="POST">
  <p>
    <h6> <label for="name">Full Name (required)</label> </h6>
    <input placeholder="Your full name" required="" type="name" name="name" style="width: 100%;"/>
  </p>


  <p>
    <h6>
      <label for="email">Email Address (required)</label>
    </h6>       
    <input placeholder="email@domain.tld" required="" type="email" name="email" style="width: 100%;"/>
    <small id="emailHelp" class="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </p>

  <p>
    <h6> <label for="message">Message (required)</label> </h6>
    <textarea rows="12" name="message" id="message" placeholder="Enter here your message" required="" style="width: 100%;"  ></textarea>
  </p>

  <p>
    <label>
      <input type="checkbox" name="newsletter" value="yes" checked>
      Sign up to the newsletter <br />
      <small id="emailHelp" class="form-text text-muted"> So you can hear from Watcha Studios / J3ZZ / jeromelithiaote.com </small>
    </label>
  </p>

  <p>
    <!-- <input type="reset" value="Clear" class="btn btn-default btn-lg"/> -->
    <button id="my-form-button">Submit</button>
  </p>

  <p id="my-form-status" style="color: red;font-size: x-large;"></p>

</form>


<!--
<form action="https://formspree.io/f/mwkwzakv" method="POST" >
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" name="name" id="name" />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="text" class="form-control" name="_replyto" id="email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea name="message" class="form-control" id="message" rows="12"></textarea>
  </div>
  <input type="submit" value="Send Message" class="btn btn-default btn-lg" />
  <input type="reset" value="Clear" class="btn btn-default btn-lg"/>
  <p id="my-form-status"></p>
</form> -->


<!-- <form id="my-form" action="https://formspree.io/f/mwkwzakv" method="POST">
  <label>Email:</label>
  <input type="email" name="email" />
  <label>Message:</label>
  <input type="text" name="message" />
  <button id="my-form-button">Submit</button>
  <p id="my-form-status"></p>
</form> -->
