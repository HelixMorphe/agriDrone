import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint, HiUser, HiPhone } from "react-icons/hi";
import { useState } from "react";
import { useFormik } from "formik";
import { registerValidate } from "../lib/validate";
import { useRouter } from "next/router";

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    // validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch("http://localhost:3000/api/auth/signup", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status) router.push("/");
      });
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4 text-left">
            Registers
          </h1>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.name && formik.touched.name ? "border-rose-600" : ""
            }`}
          >
            <input
              type="text"
              name="Full Name"
              placeholder="Full Name"
              className={styles.input_text}
              {...formik.getFieldProps("name")}
            />
            <span className="icon flex items-center px-4">
              <HiUser size={25} />
            </span>
          </div>
          {/* {formik.errors.username && formik.touched.username ? <span className='text-rose-500'>{formik.errors.username}</span> : <></>} */}
          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="phone"
              name="phoneNumber"
              placeholder="Phone Number"
              className={styles.input_text}
              {...formik.getFieldProps("phoneNumber")}
            />
            <span className="icon flex items-center px-4">
              <HiPhone size={25} />
            </span>
          </div>
          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}
          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}

          <div
            className={`${styles.input_group} ${
              formik.errors.cpassword && formik.touched.cpassword
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              placeholder="Confirm Password"
              className={styles.input_text}
              {...formik.getFieldProps("cpassword")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500'>{formik.errors.cpassword}</span> : <></>} */}

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          Have an account?{" "}
          <Link href={"/login"}>
            <a className="text-blue-700">Sign In</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
