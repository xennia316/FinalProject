import React from "react";
import styles from "../styles/tryout.module.css";

const NewLoginn = () => {
  {
    const pass_field = document.querySelector(".pass-key");
    const showBtn = document.querySelector(".show");
    showBtn.addEventListener("click", function () {
      if (pass_field.type === "password") {
        pass_field.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#3498db";
      } else {
        pass_field.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#222";
      }
    });
  }
  return (
    <div>
      <div class={styles.bg}>
        <div class={styles.content}>
          <header>Login Form</header>
          <form action="#">
            <div class={styles.field}>
              <span class="fa fa-user"></span>
              <input type="text" required placeholder="Email or Phone" />
            </div>
            <div class={styles.fieldspace}>
              <span class="fa fa-lock"></span>
              <input
                type="password"
                class="pass-key"
                required
                placeholder="Password"
              />
              <span class={styles.show}>SHOW</span>
            </div>
            <div class={styles.pass}>
              <a href="#">Forgot Password?</a>
            </div>
            <div class={styles.field}>
              <input type="submit" value="LOGIN" />
            </div>
          </form>
          <div class={styles.login}>Or login with</div>
          <div class={styles.links}>
            <div class={styles.facebook}>
              <i class="fab fa-facebook-f">
                <span>Facebook</span>
              </i>
            </div>
            <div class={styles.instagram}>
              <i class="fab fa-instagram">
                <span>Instagram</span>
              </i>
            </div>
          </div>
          <div class={styles.signup}>
            Don't have account?
            <a href="#">Signup Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLoginn;
