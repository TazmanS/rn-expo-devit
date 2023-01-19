import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import BaseButton from "../../components/BaseButton";
import BaseInput from "../../components/BaseInput";
import BaseText from "../../components/BaseText";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo";
import { COLORS } from "../../helpers/colors";
import { INPUT_TYPES } from "../../helpers/inputConsts";
import * as Yup from "yup";
import { useFormik } from "formik";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12).required(),
});

const LoginScreen = (props) => {
  const { navigation } = props;
  const handleLogin = async () => {};

  const { handleChange, handleSubmit, values, errors, touched, setFieldError } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: { email: "", password: "" },
      onSubmit: () => handleLogin(),
    });

  const navigateToRegisterScreen = () => {
    navigation.navigate("Register");
  };

  return (
    <Layout>
      <Logo />

      <BaseText styles={styles.title}>Log in to woorkroom</BaseText>

      <View style={styles.inputsBlock}>
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
          error={errors.password}
          setError={() => setFieldError("password", "")}
          touched={touched.password}
        />
      </View>
      <TouchableOpacity>
        <BaseText styles={styles.forgotPassword}>Forgot password?</BaseText>
      </TouchableOpacity>

      <View style={{ marginTop: "20%" }}>
        <BaseButton onPress={handleSubmit}>Log in</BaseButton>
      </View>

      <View style={styles.newUser}>
        <BaseText>New User? </BaseText>
        <TouchableOpacity onPress={navigateToRegisterScreen}>
          <BaseText styles={{ color: COLORS.MAIN_YELLOW_TEXT }}>
            Create Account
          </BaseText>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: "23%",
    textTransform: "capitalize",
    fontWeight: "500",
  },
  inputsBlock: {
    marginTop: "10%",
  },
  forgotPassword: {
    fontSize: 14,
    color: COLORS.MAIN_GREY_TEXT,
    marginTop: 20,
    textAlign: "right",
  },
  newUser: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
  },
});

export default LoginScreen;

// import React, { useCallback, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import BaseInput from "../components/BaseInput";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import BaseButton from "../components/BaseButton";
// import { apiCreateMovie, apiGetOneMovie, apiUpdateMovie } from "../api/movies";
// import { useFocusEffect } from "@react-navigation/native";
// import { useDispatch } from "react-redux";
// import { setSnackbar } from "../store/globalSlice";

// const MovieSchema = Yup.object().shape({
//   title: Yup.string().required(),
//   year: Yup.number().min(1950, "YEAR_MIN").max(2021, "YEAR_MAX").required(),
//   format: Yup.string().oneOf(["DVD", "VHS"], "MOVIE_FORMAT").required(),
//   actors: Yup.array()
//     .of(
//       Yup.object().shape({
//         name: Yup.string().required(),
//       })
//     )
//     .required(),
// });

// const MovieScreen = (props) => {
//   const { route, navigation } = props;
//   const dispatch = useDispatch();

//   const [movie, setMovie] = useState({});

//   const fetchMovie = async (id) => {
//     try {
//       const res = await apiGetOneMovie(id);
//       setValues({ ...res.data.data, year: res.data.data.year.toString() });
//       setMovie(res.data.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useFocusEffect(
//     useCallback(() => {
//       if (route?.params?.params?.movieId) {
//         fetchMovie(route.params.params.movieId);
//       }
//     }, [route?.params?.params?.movieId])
//   );

//   const create = async () => {
//     try {
//       const res = await apiCreateMovie({
//         ...values,
//         actors: values.actors.map((i) => i.name),
//       });
//       if (res.data.status === 1) {
//         navigation.navigate("MoviesScreen");
//       } else {
//         console.log("something get wrong");
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const update = async () => {
//     try {
//       await apiUpdateMovie(movie.id, {
//         ...values,
//         actors: values.actors.map((i) => i.name),
//       });
//       navigation.navigate("MoviesScreen");
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const {
//     values,
//     setValues,
//     handleChange,
//     handleSubmit,
//     touched,
//     errors,
//     handleBlur,
//     setTouched,
//     ...others
//   } = useFormik({
//     validationSchema: MovieSchema,
//     initialValues: {
//       id: null,
//       title: "",
//       year: "",
//       format: "",
//       actors: [
//         {
//           name: "",
//           id: Date.now(),
//         },
//       ],
//     },
//     onSubmit: () => (movie.id ? update() : create()),
//   });

//   const _handleSubmit = () => {
//     if (!!Object.keys(errors)[0]) {
//       if (Object.keys(errors)[0] === "actors") {
//         dispatch(setSnackbar("MOVIE_ACTOR"));
//       } else {
//         dispatch(setSnackbar(errors[Object.keys(errors)[0]]));
//       }
//     } else {
//       handleSubmit();
//     }
//   };

//   const setActors = (text, id) => {
//     setValues({
//       ...values,
//       actors: values.actors.map((item) =>
//         item.id === id ? { ...item, name: text } : item
//       ),
//     });
//   };

//   const addNewActor = () => {
//     const newArr = values.actors.concat();
//     newArr.push({
//       name: "",
//       id: Date.now(),
//     });
//     setValues({
//       ...values,
//       actors: newArr,
//     });
//   };

//   const deleteActor = (id) => {
//     setValues({
//       ...values,
//       actors: values.actors.filter((i) => i.id !== id).map((i) => i),
//     });
//   };

//   return (
//     <View style={styles.wrapper}>
//       <ScrollView style={styles.root}>
//         <Text>Movie</Text>
//         <View>
//           <View>
//             <BaseInput
//               width={"100%"}
//               placeholder="Title"
//               icon="video-camera"
//               value={values.title}
//               setValue={handleChange("title")}
//               onBlur={handleBlur("title")}
//               error={errors.title}
//               touched={touched.title}
//             />
//           </View>
//           <View>
//             <BaseInput
//               width={"100%"}
//               placeholder="Year"
//               icon="calendar"
//               value={values.year}
//               setValue={handleChange("year")}
//               onBlur={handleBlur("year")}
//               error={errors.year}
//               touched={touched.year}
//             />
//           </View>
//           <View>
//             <BaseInput
//               width={"100%"}
//               placeholder="Format DVD or VHS"
//               icon="info"
//               value={values.format}
//               setValue={(text) =>
//                 setValues({ ...values, format: text.toUpperCase() })
//               }
//               onBlur={handleBlur("format")}
//               error={errors.format}
//               touched={touched.format}
//             />
//           </View>
//           {values.actors.map((item, index) => (
//             <View key={item.id || index}>
//               <BaseInput
//                 width={"100%"}
//                 placeholder="Actor"
//                 icon="user"
//                 value={values.actors[index].name}
//                 setValue={(text) => setActors(text, item.id)}
//                 onFocus={() =>
//                   setTouched({
//                     ...touched,
//                     actors: touched?.actors
//                       ? [...touched.actors, item.id]
//                       : [item.id],
//                   })
//                 }
//                 // onBlur={handleBlur("actors")}
//                 error={errors.actors && errors.actors[index]}
//                 touched={
//                   touched.actors && touched.actors.find((i) => i === item.id)
//                 }
//               />
//               {values.actors.length > 1 && (
//                 <TouchableOpacity onPress={() => deleteActor(item.id)}>
//                   <Text style={{ color: "blue", fontSize: 14 }}>
//                     Delete actor
//                   </Text>
//                 </TouchableOpacity>
//               )}
//             </View>
//           ))}
//           <View style={styles.divider} />
//           <TouchableOpacity onPress={addNewActor}>
//             <Text style={{ color: "blue", fontSize: 20 }}>Add new actor</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//       {movie.id ? (
//         <View style={styles.center}>
//           <BaseButton title="Update" onPress={_handleSubmit} />
//         </View>
//       ) : (
//         <View style={styles.center}>
//           <BaseButton title="Create" onPress={_handleSubmit} />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     margin: 12,
//   },
//   wrapper: {
//     flex: 1,
//   },
//   divider: {
//     width: "100%",
//     height: 1,
//     backgroundColor: "grey",
//     marginVertical: 12,
//   },
//   center: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default MovieScreen;
