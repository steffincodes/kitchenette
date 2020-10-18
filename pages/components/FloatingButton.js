export default function FloatingButton() {
  return (
    <div>
      <a
        className="fixed rounded-full h-16 w-16 text-center z-50 bottom-right bg-fab pt-3"
        id="fab-menu"
      >
        <span className="mt-4 fab-icon">🍔</span>
      </a>
      <ul className="fixed bottom-right-2 list-none" id="fab">
        <li className="list-none my-2">
          <a
            id="fab-menu"
            className="block rounded-full bg-fab h-16 w-16 text-center pt-3"
          >
            <span className="mt-4 fab-icon">🆕</span>
          </a>
        </li>
        <li className="list-none my-2">
          <a
            id="fab-menu"
            className="block rounded-full bg-fab h-16 w-16 text-center pt-3"
          >
            <span className="mt-4 fab-icon">⏲️</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
