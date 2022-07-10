const ButtonOpenFormChat = ({
  title,
  setOpenForm,
  setButtonActive,
  buttonActive,
}) => {
  const handleClick = () => {
    setOpenForm(true);
    setButtonActive(true);
  };
  return (
    <button
      disabled={buttonActive}
      onClick={handleClick}
      className="w-3/5 p-3 px-4 text-xl font-semibold tracking-wide transition-all duration-300 bg-black border rounded-lg disabled:hover:text-green-code disabled:opacity-50 disabled:cursor-not-allowed text-green-code bg-opacity-60 border-green-dark-code hover:text-white focus:outline-none"
    >
      {title}
    </button>
  );
};

export default ButtonOpenFormChat;
