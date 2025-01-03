import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { H2, Text } from '../../components/common/Typography';
import { Flex } from '../../components/common/Flex';
import { Spacing } from '../../components/common/Spacing';
import { useForm } from '../../hooks/useForm';
import { useToast } from '../../components/common/Toast/ToastContext';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { authApi } from '../../api/auth';

interface LoginFormValues {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      email: '',
      password: ''
    },
    {
      email: { required: true },
      password: { required: true }
    }
  );

  const onSubmit = async (formValues: LoginFormValues) => {
    setIsLoading(true);
    
    try {
      const response = await authApi.login(formValues);
      login(response.token);
      showToast('로그인에 성공했습니다.', 'success');
      navigate('/receipts/upload');
    } catch (error) {
      showToast('이메일 또는 비밀번호가 일치하지 않습니다.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap={32}>
            <H2>로그인</H2>
            
            <Flex direction="column" gap={16} fullWidth>
              <Input
                label="이메일"
                name="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                value={values.email}
                onChange={handleChange}
                error={errors.email?.isValid === false ? errors.email : undefined}
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
                error={errors.password?.isValid === false ? errors.password : undefined}
                fullWidth
                required
              />
            </Flex>

            <Button type="submit" fullWidth loading={isLoading}>
              로그인
            </Button>

            <Spacing size={8} />
            
            <Flex justify="center" gap={8}>
              <Text variant="secondary">
                아직 회원이 아니신가요?
              </Text>
              <Text 
                onClick={() => navigate('/signup')}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                회원가입
              </Text>
            </Flex>
          </Flex>
        </form>
      </S.Content>
    </S.Container>
  );
}; 