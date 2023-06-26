import { useEffect } from "react";
import styles from "./Locofy.module.css";
import { auth , googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

const Locofy = () => {
  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
    } catch (err){
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
    }
  }  
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.locofy}>
      <div className={styles.ellipes} data-animate-on-scroll>
        <img
          className={styles.ellipesChild}
          alt=""
          src="/group-5.svg"
          data-animate-on-scroll
        />
        <img
          className={styles.ellipesItem}
          alt=""
          src="/group-4.svg"
          data-animate-on-scroll
        />
      </div>
      <div className={styles.image} data-animate-on-scroll>
        <img
          className={styles.imageChild}
          alt=""
          src="/vector-15.svg"
          data-animate-on-scroll
        />
        <img
          className={styles.imageItem}
          alt=""
          src="/group-6.svg"
          data-animate-on-scroll
        />
        <img
          className={styles.cloudStorageImage}
          alt=""
          src="/cloud-storage-image@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className={styles.loginSection} data-animate-on-scroll>
        <input className={styles.checkbox} type="checkbox" required />
        <div className={styles.termsBodyTextContainer}>
          <span>
            <span>I agree to the</span>
            <span className={styles.span}>{` `}</span>
          </span>
          <span className={styles.terms}>Terms</span>
          <span>
            <span className={styles.span}>{` `}</span>
            <span>of</span>
            <span className={styles.span}>{` `}</span>
          </span>
          <span className={styles.terms}>Service and Privacy Policy</span>
        </div>
        <div className={styles.loginHeader}>
          Create Account/ Login into Account
        </div>
        <button className={styles.signUpGoogleButton} onClick={signInWithGoogle}>
          <img className={styles.googleIcon} alt="" src="/google-icon.svg" />
          <div className={styles.signUpWith}>Sign up with Google</div>
          <div className={styles.signUpButton} />
        </button>
        <a className={styles.loginAnchor}>
          <span>{`Already a member? `}</span>
          <span className={styles.login}>Login</span>
        </a>
      </div>
      <div className={styles.aboutCompany} data-animate-on-scroll>
        <div className={styles.companyNameHeader}>Motto</div>
        <img
          className={styles.comapnyLogoImage}
          alt=""
          src="/comapny-logo-image@2x.png"
        />
        <div className={styles.aboutTheCompany}>about the company</div>
      </div>
    </div>
  );
};

export default Locofy;