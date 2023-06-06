export const goToLogin = (navigate) => {
  navigate('/login');
};

export const goToSignUp = (navigate) => {
  navigate('/signup');
};

export const goHome = (navigate) => {
  navigate('/');
};

export const goToProduct = (navigate, productId) => {
  navigate(`/product/${productId}`);
};
