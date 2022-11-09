import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormInput from '../components/FormInput';
import CustomFormik from '../components/CustomFormik';
import FormButton from '../components/FormButton';
import colors from '../theme/colors';
import LinkNavigator from '../components/LinkNavigator';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  error: {
    color: colors.errors,
  },
});

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email!').required('Email Is Missing'),
  password: yup.string().trim().required('Password Is Required'),
});

export default function LoginScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ bottom: 50 }}>
        <Text style={{ alignItems: 'center', color: colors.black }}>Login To Mixology</Text>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => navigation.navigate('Tabs')} //TODO: Change To Proper Submit Function Later
        >
          <FormInput name="email" placeholderText="Email" />
          <FormInput secure={true} name="password" placeholderText="Password" />
          <FormButton color={colors.buttons} title="Login" />
        </CustomFormik>
        <LinkNavigator
          leftLinkText="Register"
          rightLinkText="Forgot Password"
          onLeftLinkPress={() => navigation.navigate('Register')}
          onRightLinkPress={() => navigation.navigate('Forgot')}
        />
      </View>
    </ScrollView>
  );
}
