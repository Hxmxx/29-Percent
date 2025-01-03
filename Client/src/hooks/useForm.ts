import { useState, ChangeEvent } from 'react';

interface ValidationResult {
  isValid: boolean;
  message: string;
}

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  email?: boolean;
  password?: boolean;
  match?: string;
}

interface Errors {
  [key: string]: ValidationResult;
}

export const useForm = <T extends { [key: string]: any }>(
  initialValues: T,
  validationRules: { [key in keyof T]?: ValidationRules } = {}
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Errors>({});

  const validate = (name: keyof T, value: any): ValidationResult => {
    const rules = validationRules[name];
    if (!rules) return { isValid: true, message: '' };

    if (rules.required && !value) {
      return { isValid: false, message: '필수 입력 항목입니다' };
    }

    if (rules.email) {
      return {
        isValid: /\S+@\S+\.\S+/.test(value),
        message: /\S+@\S+\.\S+/.test(value) ? '사용 가능한 이메일입니다' : '올바른 이메일 형식이 아닙니다'
      };
    }

    if (rules.password) {
      const isValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{5,}$/.test(value);
      return {
        isValid,
        message: isValid ? '사용 가능한 비밀번호입니다' : '비밀번호는 5자 이상, 영문 대/소문자, 숫자, 특수문자를 포함해야 합니다'
      };
    }

    if (rules.minLength) {
      return {
        isValid: value.length >= rules.minLength,
        message: value.length >= rules.minLength 
          ? '사용 가능합니다' 
          : `최소 ${rules.minLength}자 이상 입력해주세요`
      };
    }

    if (rules.match) {
      return {
        isValid: values[rules.match] === value,
        message: values[rules.match] === value 
          ? '비밀번호가 일치합니다' 
          : '비밀번호가 일치하지 않습니다'
      };
    }

    return { isValid: true, message: '' };
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    const validationResult = validate(name as keyof T, value);
    setErrors(prev => ({ ...prev, [name]: validationResult }));
  };

  const handleSubmit = (onSubmit: (values: T) => void) => {
    return (e: React.FormEvent) => {
      e.preventDefault();
      
      const newErrors: Errors = {};
      let isValid = true;
      
      Object.keys(values).forEach(key => {
        const validationResult = validate(key as keyof T, values[key]);
        newErrors[key] = validationResult;
        if (!validationResult.isValid) isValid = false;
      });

      setErrors(newErrors);

      if (isValid) {
        onSubmit(values);
      }
    };
  };

  return { values, errors, handleChange, handleSubmit };
}; 