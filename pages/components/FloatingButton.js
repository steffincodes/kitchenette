export default function FloatingButton() {
  return (
    <div>
      <a
        class="fixed rounded-full h-16 w-16 text-center z-50 bottom-right bg-fab pt-3"
        id="fab-menu"
      >
        <span class="mt-4 fab-icon">🍔</span>
      </a>
      <ul class="fixed bottom-right-2 list-none" id="fab">
        <li class="list-none my-2">
          <a
            id="fab-menu"
            class="block rounded-full bg-fab h-16 w-16 text-center pt-3"
          >
            <span class="mt-4 fab-icon">🆕</span>
          </a>
        </li>
        <li class="list-none my-2">
          <a
            id="fab-menu"
            class="block rounded-full bg-fab h-16 w-16 text-center pt-3"
          >
            <span class="mt-4 fab-icon">⏲️</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
