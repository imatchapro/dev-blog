import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import PageHead from '../components/templates/PageHead';
import ThePrivacyPolicy from '../components/organisms/ThePrivacyPolicy';
import PageContents from '../components/molecules/PageContents';
import FormItem from '../components/molecules/FormItem';
import TextFormLabel from '../components/atoms/TextFormLabel';
import TextFormError from '../components/atoms/TextFormError';
import HeadingPage from '../components/atoms/HeadingPage';
import ButtonFormSubmit from '../components/atoms/ButtonFormSubmit';
import TextInformation from '../components/atoms/TextInformation';
import TextAlert from '../components/atoms/TextAlert';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type ResponseMessage = {
  type: string;
  message: string;
};

const Contact: NextPage = () => {
  const resInitMessage: ResponseMessage = {
    type: '',
    message: '',
  };
  const resErrorMessage: ResponseMessage = {
    type: 'error',
    message: 'エラーが発生しました。もう一度やり直してください。',
  };
  const [response, setResponse] = useState<ResponseMessage>(resInitMessage);
  const { register, handleSubmit, errors } = useForm<FormValues>();
  const router = useRouter();

  const resetForm = () => {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    form.reset();
  };

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    const post = await Object.assign(values, {
      accessKey: process.env.static_form_access_key,
    });

    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' },
      });

      const json = await res.json();

      if (json.success) {
        await resetForm();
        await router.push({
          pathname: '/thanks',
          query: {
            name: values.name,
          },
        });
      } else {
        setResponse(resErrorMessage);
      }
    } catch {
      setResponse(resErrorMessage);
    }
  };

  return (
    <>
      <PageHead
        title="Contact"
        description="お問い合わせのページです。フォームからお問い合わせをすることで、サイトの所有者にお問い合わせをすることができます。"
        type="website"
        image=""
      />
      <section>
        <HeadingPage>Contact</HeadingPage>
        <PageContents>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} method="post">
            <FormItem>
              <TextFormLabel htmlFor="name">Name</TextFormLabel>
              <div className="sm:w-4/5">
                <input
                  id="name"
                  className={errors.name ? 'form-input-area-error' : 'form-input-area'}
                  type="text"
                  name="name"
                  placeholder="あなたのお名前"
                  ref={register({ required: true })}
                />
                {errors.name && <TextFormError>お名前が正しく入力されていません</TextFormError>}
              </div>
            </FormItem>
            <FormItem>
              <TextFormLabel htmlFor="email">Email</TextFormLabel>
              <div className="sm:w-4/5">
                <input
                  id="email"
                  className={errors.email ? 'form-input-area-error' : 'form-input-area'}
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  ref={register({
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <TextFormError>メールアドレスが正しく入力されていません</TextFormError>
                )}
              </div>
            </FormItem>
            <FormItem>
              <TextFormLabel htmlFor="message">Message</TextFormLabel>
              <div className="sm:w-4/5">
                <textarea
                  id="message"
                  className={errors.message ? 'form-input-area-error' : 'form-input-area'}
                  name="message"
                  placeholder="お問い合わせのメッセージ"
                  rows={6}
                  ref={register({ required: true })}
                />
                {errors.message && (
                  <TextFormError>メッセージが正しく入力されていません</TextFormError>
                )}
              </div>
            </FormItem>
            <input type="text" name="honeypot" className="hidden" />
            <div className="mt-12 w-full h-40 py-6 px-4 border overflow-auto rounded sm:h-48 sm:py-8 sm:px-6">
              <ThePrivacyPolicy />
            </div>
            <div className="mt-3">
              <TextInformation>プライバシーポリシーに同意の上、送信してください。</TextInformation>
            </div>
            {response.message && (
              <div className="mt-3">
                <TextAlert>{response.message}</TextAlert>
              </div>
            )}
            <div className="text-center mt-12">
              <ButtonFormSubmit />
            </div>
          </form>
        </PageContents>
      </section>
    </>
  );
};

export default Contact;
