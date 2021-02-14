
<form id="my-form" action="https://formspree.io/f/{{ site.form_id }}" method="POST">
  <p>
    <h6> <label for="name">Nom complet (requis)</label> </h6>
    <input placeholder="Votre nom complet" required="" type="name" name="name" style="width: 100%;"/>
  </p>


  <p>
    <h6>
      <label for="email">Adresse Email (requise)</label>
    </h6>       
    <input placeholder="email@domain.tld" required="" type="email" name="email" style="width: 100%;"/>
    <small id="emailHelp" class="form-text text-muted">
      Nous ne partagerons jamais votre email avec quelqu'un d'autre.
    </small>
  </p>

  <p>
    <h6> <label for="message">Message (requis)</label> </h6>
    <textarea rows="12" name="message" id="message" placeholder="Entrer votre message ici" required="" style="width: 100%;"  ></textarea>
  </p>

  <p>
    <label>
      <input type="checkbox" name="newsletter" value="yes" checked>
      Inscription à la newsletter<br />
      <small id="emailHelp" class="form-text text-muted"> Pour recevoir des nouvelles de Watcha Studios / J3ZZ / jeromelithiaote.com </small>
    </label>
  </p>

  <p>
    <!-- <input type="reset" value="Clear" class="btn btn-default btn-lg"/> -->
    <button id="my-form-button">Submit</button>
  </p>

  <p id="my-form-status" style="color: red;font-size: x-large;"></p>

</form>
