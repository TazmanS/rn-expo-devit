import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import BaseInput from "../../components/BaseInput";
import BaseText from "../../components/BaseText";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo";
import * as Yup from "yup";
import { useFormik } from "formik";
import { INPUT_TYPES } from "../../helpers/inputConsts";
import BaseButton from "../../components/BaseButton";
import { COLORS } from "../../helpers/colors";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(3).max(20).required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.mixed().test(
    "match",
    "Passwords do not match",
    function () {
      return this.parent.password === this.parent.passwordConfirm;
    }
  ),
});

const RegisterScreen = () => {
  const handleRegister = async () => {
    console.log("handleRegister");
  };

  const { values, errors, touched, handleChange, setFieldError } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: () => handleRegister(),
  });

  return (
    <Layout>
      <Logo />

      <View style={styles.inputsBlock}>
        <BaseInput
          value={values.name}
          setValue={handleChange("name")}
          type={INPUT_TYPES.TEXT}
          label="Your Name"
          rootStyles={{ marginBottom: 40 }}
          error={errors.name}
          setError={() => setFieldError("name", "")}
          touched={touched.name}
        />

        <BaseInput
          value={values.email}
          setValue={handleChange("email")}
          type={INPUT_TYPES.TEXT}
          label="Your Email"
          rootStyles={{ marginBottom: 40 }}
          error={errors.email}
          setError={() => setFieldError("email", "")}
          touched={touched.email}
        />

        <BaseInput
          value={values.password}
          setValue={handleChange("password")}
          type={INPUT_TYPES.PASSWORD}
          label="Password"
          rootStyles={{ marginBottom: 40 }}
          error={errors.password}
          setError={() => setFieldError("password", "")}
          touched={touched.password}
        />

        <BaseInput
          value={values.passwordConfirm}
          setValue={handleChange("passwordConfirm")}
          type={INPUT_TYPES.PASSWORD}
          label="Password Confirm"
          error={errors.passwordConfirm}
          setError={() => setFieldError("passwordConfirm", "")}
          touched={touched.passwordConfirm}
        />
      </View>

      <View style={{ marginTop: "20%" }}>
        <BaseButton>Registration</BaseButton>
      </View>

      <View style={styles.login}>
        <BaseText>Have Account? </BaseText>
        <TouchableOpacity>
          <BaseText styles={{ color: COLORS.MAIN_YELLOW_TEXT }}>
            Log In
          </BaseText>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputsBlock: {
    marginTop: "10%",
  },
  login: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
  },
});

export default RegisterScreen;
