import test from 'ava';
import Restaurant from "../entity/Restaurant";
import Waiter from "../entity/Waiter";
import Franchise from "../entity/Franchise";

  test("3 table", () => {
    // ÉTANT DONNE un restaurant ayant 3 tables
    // 	QUAND le service commence
    // 	ALORS elles sont toutes affectées au Maître d'Hôtel
  });

// ÉTANT DONNE un restaurant ayant 3 tables
// 	QUAND le service commence
// 	ALORS elles sont toutes affectées au Maître d'Hôtel

// 	ÉTANT DONNÉ un restaurant ayant 3 tables dont une affectée à un serveur
// 	QUAND le service débute
// 	ALORS la table éditée est affectée au serveur et les deux autres au maître d'hôtel

// 	ÉTANT DONNÉ un restaurant ayant 3 tables dont une affectée à un serveur
// 	QUAND le service débute
// 	ALORS il n'est pas possible de modifier le serveur affecté à la table

// 	ÉTANT DONNÉ un restaurant ayant 3 tables dont une affectée à un serveur
// 	ET ayant débuté son service
// 	QUAND le service se termine
// 	ET qu'une table est affectée à un serveur
// 	ALORS la table éditée est affectée au serveur et les deux autres au maître d'hôtel
