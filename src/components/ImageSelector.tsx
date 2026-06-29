export default function ImageSelector() {
  const imageInput = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col">
      <input
        ref={imageInput}
        type="file"
        id="imageInput"
        accept="image/*"
        className="hidden"
      />

      <button
        className="rounded-xl bg-primary text-white py-2 px-4 hover:bg-primary/80 transition-colors"
        onClick={() => imageInput.current?.click()}
      >
        Select Image
      </button>
    </div>
  );
}
