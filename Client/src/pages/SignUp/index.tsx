import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useToast } from '../../components/common/Toast/ToastContext';
import { authApi } from '../../api/auth';
import { Stack } from '../../components/common/Stack';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Flex } from '../../components/common/Flex';
import { H2, Text } from '../../components/common/Typography';
import { Spacing } from '../../components/common/Spacing';
import * as S from './styles';

interface SignUpFormValues {
  email: string;
  password: string;
  name: string;
}

export const SignUp = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      email: '',
      password: '',
      passwordConfirm: '',
      name: ''
    },
    {
      email: { required: true, email: true },
      password: { required: true, password: true },
      passwordConfirm: { required: true, match: 'password' },
      name: { required: true, minLength: 2 }
    }
  );

  const onSubmit = async (formValues: SignUpFormValues) => {
    setIsLoading(true);
    
    try {
        if (formValues.email === 'test@test.com') {
            showToast('이미 사용 중인 이메일입니다.', 'error');
            return;
        }
      console.log('회원가입 시도:', formValues); // 디버그용
      await authApi.signup(formValues);
      showToast('회원가입에 성공했습니다.', 'success');
      navigate('/login');
    } catch (error: any) {
      console.error('회원가입 에러:', error.response?.data || error); // 디버그용
      showToast(error.response?.data?.detail || '회원가입에 실패했습니다.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap={32}>
            <H2>회원가입</H2>
            
            <Flex direction="column" gap={16} fullWidth>
              <Input
                label="이름"
                name="name"
                placeholder="이름을 입력해주세요"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
                helper="2자 이상 입력해주세요"
                fullWidth
                required
              />
              <Input
                label="이메일"
                name="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
                fullWidth
                required
              />
              <Input
                label="비밀번호"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={values.password}
                onChange={handleChange}
                error={errors.password}
                helper="5자 이상, 영문 대/소문자, 숫자, 특수문자를 포함해주세요"
                fullWidth
                required
              />
              <Input
                label="비밀번호 확인"
                name="passwordConfirm"
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                value={values.passwordConfirm}
                onChange={handleChange}
                error={errors.passwordConfirm}
                fullWidth
                required
              />
            </Flex>

            <Button type="submit" fullWidth loading={isLoading}>
              회원가입
            </Button>

            <Spacing size={8} />
            
            <Flex justify="center" gap={8}>
              <Text variant="secondary">
                이미 계정이 있으신가요?
              </Text>
              <Text 
                onClick={() => navigate('/login')}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                로그인
              </Text>
            </Flex>
          </Flex>
        </form>
      </S.Content>
    </S.Container>
  );
}; 