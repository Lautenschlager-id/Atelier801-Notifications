if (!String.prototype.format) {
	String.prototype.format = function () {
		var string = String(this);
		for (var i = 0; i < arguments.length; i++) {
			string = string.replace(new RegExp('\\{' + i + '\\}', 'g'), arguments[i]);
		}
		return string;
	};
}
$(function () {
	'use strict';
	if ($('#identification')[0]) {
		return;
	}
	function Language(locale) {
		if (typeof locale === 'undefined') {
			locale = navigator.language.substr(0, 2);
		}
		switch (locale) {
			default:
			case 'en':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Notifications',
						'mention': '{0} mentioned you on thread {1}',
						'reply': '{0} replied to your comment on thread {1}',
						'now': 'just now',
						'minute': '{0} minutes ago',
						'hour': '{0} hours ago',
						'day': '{0} days ago',
						'week': '{0} weeks ago',
						'month': '{0} months ago',
						'year': '{0} years ago',
						'empty': 'No notification',
						'sounds': 'Enable sounds',
						'close': 'Close'
					}
				});
				break;
			case 'fr':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Notifications',
						'mention': '{0} vous à mentionné dans le fil {1}',
						'reply': '{0} à repondu à votre commentaire sur le fil {1}',
						'now': 'juste maintenant',
						'minute': 'il y a {0} minutes',
						'hour': 'il y a {0} heures',
						'day': 'il y a {0} jours',
						'week': 'il y a {0} semaines',
						'month': 'il y a {0} mois',
						'year': 'il y a {0} ans',
						'empty': 'Aucune notification',
						'sounds': 'Activer sons',
						'close': 'Fermer'
					}
				});
				break;
			case 'br':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Notificações',
						'mention': '{0} mencionou você no tópico {1}',
						'reply': '{0} respondeu seu comentário no tópico {1}',
						'now': 'há alguns segundos',
						'minute': 'há {0} minutos',
						'hour': 'há {0} horas',
						'day': 'há {0} dias',
						'week': 'há {0} semanas',
						'month': 'há {0} meses',
						'year': 'há {0} anos',
						'empty': 'Nenhuma notificação',
						'sounds': 'Ativar sons',
						'close': 'Fechar'
					}
				});
				break;
			case 'es':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Notificaciones',
						'mention': '{0} te ha mencionado en el tema {1}',
						'reply': '{0} ha respondido a tu comentario en el tema {1}',
						'now': 'justo ahora',
						'minute': 'Hace {0} minutos',
						'hour': 'Hace {0} horas',
						'day': 'Hace {0} días',
						'week': 'Hace {0} semanas',
						'month': 'Hace {0} meses',
						'year': 'Hace {0} años',
						'empty': 'No notificaciones',
						'sounds': 'Activar sonido',
						'close': 'Cerrar'
					}
				});
				break;
			case 'tr':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Bildirimler',
						'mention': '{0} {1} konusunda senden bahsetti',
						'reply': '{0} {1} konusundaki yorumunu yanıtladı',
						'now': 'şu anda',
						'minute': '{0} dakika önce',
						'hour': '{0} saat önce',
						'day': '{0} gün önce',
						'week': '{0} hafta önce',
						'month': '{0} ay önce',
						'year': '{0} yıl önce',
						'empty': 'Bildirim yok',
						'sounds': 'Sesleri aç',
						'close': 'Kapat'
					}
				});
				break;
			case 'pl':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Powiadomienia',
						'mention': '{0} oznaczył/a cię w wątku {1}',
						'reply': '{0} odpowiedział/a na twój komentarz w wątku {1}',
						'now': 'już teraz',
						'minute': '{0} minut temu',
						'hour': '{0} godzin temu',
						'day': '{0} dni temu',
						'week': '{0} tygodnie temu',
						'month': '{0} miesięcy temu',
						'year': '{0} lata temu',
						'empty': 'Brak powiadomień',
						'sounds': 'Wyłącz dźwięk',
						'close': 'Zamknij'
					}
				});
				break;
			case 'hu':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Értesítések',
						'mention': '{0} megemlített téged a {1} témában',
						'reply': '{0} válaszolt a hozzászólásodra a {1} témában',
						'now': 'pont most',
						'minute': '{0} perce',
						'hour': '{0} órája',
						'day': '{0} napja',
						'week': '{0} hete',
						'month': '{0} hónapja',
						'year': '{0} éve',
						'empty': 'Nincs értesítés',
						'sounds': 'Hangok bekapcsolása',
						'close': 'Bezár'
					}
				});
				break;
			case 'ro':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Notificări',
						'mention': '{0} te-a menționat în subiectul {1}',
						'reply': '{0} a răspuns la comentariul tău în subiectul {1}',
						'now': 'chiar acum',
						'minute': 'Acum {0} minute',
						'hour': 'Acum {0} ore',
						'day': 'Acum {0} zile',
						'week': 'Acum {0} săptămâni',
						'month': 'Acum {0} luni',
						'year': 'Acum {0} ani',
						'empty': 'Nicio notificare',
						'sounds': 'Activați sunetele',
						'close': 'Închide'
					}
				});
				break;
			case 'ar':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'الإشعارات',
						'mention': '{0} ذكرك في الموضوع {1}',
						'reply': '{0} رد على تعليقك في الموضوع {1}',
						'now': 'الآن فقط',
						'minute': 'قبل {0} دقيقة',
						'hour': 'قبل {0} ساعة',
						'day': 'قبل {0} أيام',
						'week': 'قبل {0} أسابيع',
						'month': 'قبل {0} أشهر',
						'year': 'قبل {0} سنوات',
						'empty': 'لا اشعارات',
						'sounds': 'تشغيل الصوت',
						'close': 'إغلاق'
					}
				});
				break;
			case 'de':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Benachrichtigungen',
						'mention': '{0} hat dich im Thread {1} erwähnt',
						'reply': '{0} hat auf deinen Kommentar im Thread {1} geantwortet',
						'now': 'gerade eben',
						'minute': 'vor {0} Minuten',
						'hour': 'vor {0} Stunden',
						'day': 'vor {0} Tagen',
						'week': 'vor {0} Wochen',
						'month': 'vor {0} Monaten',
						'year': 'vor {0} Jahren',
						'empty': 'Keine Benachrichtigungen',
						'sounds': 'Aktiviere Töne',
						'close': 'Schließen'
					}
				});
				break;
			case 'it':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Notifiche',
						'mention': '{0} ti ha menzionato nel thread {1}',
						'reply': '{0} ha risposto al tuo commento nel thread {1}',
						'now': 'appena adesso',
						'minute': '{0} minuti fa',
						'hour': '{0} ore fa',
						'day': '{0} giorni fa',
						'week': '{0} settimane fa',
						'month': '{0} mesi fa',
						'year': '{0} anni fa',
						'empty': 'Nessuna notificazione',
						'sounds': 'Abilita suoni',
						'close': 'Chiudi'
					}
				});
				break;
			case 'hr':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Obaveštenja',
						'mention': '{0} vas je pomenuo u temi {1}',
						'reply': '{0} vam je odgovorio u temi {1}',
						'now': 'upravo sad',
						'minute': 'prije {0} minuta',
						'hour': 'prije {0} sati',
						'day': 'prije {0} dana',
						'week': 'prije {0} tjedna',
						'month': 'prije {0} mjeseci',
						'year': 'prije {0} godina',
						'empty': 'Nema obavijesti',
						'sounds': 'Dozvoli zvuk',
						'close': 'Zatvoriti'
					}
				});
				break;
			case 'lv':
				Object.defineProperty(this, 'pack', {
					value: {
						'notifications': 'Paziņojumi',
						'mention': '{0} pieminēja tevi tēmā {1}',
						'reply': '{0} atbildēja uz tavu komentāru tēmā {1}',
						'now': 'tikko',
						'minute': 'pirms {0} minūtēm',
						'hour': 'pirms {0} stundām',
						'day': 'pirms {0} dienām',
						'week': 'pirms {0} nedēļām',
						'month': 'pirms {0} mēnešiem',
						'year': 'pirms {0} gadiem',
						'empty': 'Nav paziņojumu',
						'sounds': 'Ieslēgt skaņas',
						'close': 'Aizvērt'
					}
				});
				break;
		}
	}
	Language.prototype = {
		text: function (attribute) {
			return String(this.pack[attribute] || '');
		}
	};
	var translator = new Language($('#langue_principale').val());
	var username = $('.nav.ltr.pull-right > li:first-child > a, .nav.rtl.pull-left > li:last-child > a').text().trim();
	var key = 'user-' + btoa(username);
	var application = {
		account: (key in localStorage ? JSON.parse(localStorage.getItem(key)) : {
			username: username,
			pending: 0,
			notifications: [],
			settings: {
				sounds: true
			},
			timestamp: Date.now(),
		}),
		forums: [{
			id: 5,
			title: 'Atelier 801'
		}, {
			id: 6,
			title: 'Transformice'
		}, {
			id: 7,
			title: 'Bouboum'
		}, {
			id: 8,
			title: 'Fortoresse'
		}, {
			id: 508574,
			title: 'Nekodancer'
		}],
		ringtone: new Audio('https://notificationsounds.com/notification-sounds/definite-555/download/mp3'),
		getNotifications: function () {
			for (var i = 0; i < application.forums.length; i++) {
				$.get('https://atelier801.com/search?te=4&ou=1&c=0&s=0', {
					'f': application.forums[i].id,
					'se': application.account.username
				}, function search(data) {
					var context = $.parseHTML(data);
					var results = $('.cadre-resultat-recherche', context);
					results.each(function () {
						var message = {
							url: $(this).find('.lien-blanc').attr('href'),
							type: new RegExp('\\[quote=' + application.account.username + '\\]', 'i').test($(this).find('.cadre-message-recherche').text()) ? 2 : 1,
							topic: $(this).find('.navigation-resultat-recherche > li:nth-last-child(3)').text().trim(),
							author: $(this).find('.cadre-type-auteur-joueur').text().trim(),
							content: $(this).find('.message-resultat-recherche').text().trim().replace(/^.+?:\s*/, ''),
							timestamp: parseInt($(this).find('.texte-date').text())
						};
						if (!application.account.notifications.find(item => item.url === message.url) && message.timestamp > application.account.timestamp) {
							if (message.author !== application.account.username) {
								var index = application.account.notifications.findIndex(item => item.timestamp <= message.timestamp);
								if (index === -1) {
									index = application.account.notifications.length;
								}
								application.account.notifications.splice(index, 0, message);
								application.account.settings.sounds && application.ringtone.play();
								$('#popup_notifications').is(':hidden') && $('.bouton-badge').attr('data-badge', ++application.account.pending);
							}
							if ($(this).is(results.last())) {
								var pagination = $('.input-pagination', context);
								var current = parseInt(pagination.val());
								var last = parseInt(pagination.attr('max'));
								if (current < last) {
									$.get($('#formulaire_pagination', context).attr('action'), {
										'p': current + 1
									}, search);
								}
							}
						}
						else {
							return false;
						}
					});
					if (application.account.notifications.length > 0) {
						$('#popup_notifications > .modal-body').html(application.account.notifications.reduce(function (result, item) {
							var elapsed = Date.now() - item.timestamp;
							return result + `<li>
<a href="${item.url}">
	${translator.text(item.type === 1 ? 'mention' : 'reply').format('<b>' + item.author + '</b>', '<b>' + item.topic + '</b>')}: "${item.content}"
	<br>
	<small>${elapsed < 60000 ? translator.text('now') : (elapsed < 3600000 ? translator.text('minute').format(Math.floor(elapsed / 60000)) : (elapsed < 86400000 ? translator.text('hour').format(Math.floor(elapsed / 3600000)) : (elapsed < 604800000 ? translator.text('day').format(Math.floor(elapsed / 86400000)) : (elapsed < 2678400000 ? translator.text('week').format(Math.floor(elapsed / 604800000)) : (elapsed < 31536000000 ? translator.text('month').format(Math.floor(elapsed / 2678400000)) : translator.text('year').format(Math.floor(elapsed / 31536000000)))))))}</small>
</a>
</li>`;
						}, '<ul class="catalogue">') + '</ul>');
					}
					else {
						$('#popup_notifications > .modal-body').html(`<center>${translator.text('empty')}</center>`);
					}
				});
			}
		}
	};
	$('head').append(`<style>
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.chargeur {
		display: inline-block;
		width: 16px;
		height: 16px;
		border: 4px solid transparent;
		border-top-color: #999999;
		border-radius: 50%;
		animation: spin 0.5s linear infinite;
	}
	.catalogue {
		margin: -15px;
		list-style: none;
	}
	.catalogue > li {
		border-bottom: 1px solid #eeeeee;
	}
	.catalogue > li:last-child {
		border: none;
	}
	.catalogue > li > a {
		display: block;
		clear: both;
		padding: 9px 15px;
		text-decoration: none;
		word-wrap: break-word;
		color: #333333;
		background-color: #f5f5f5;
	}
	.catalogue > li > a:hover {
		background-color: #e6e6e6;
	}
	.catalogue > li > a:visited:not(:hover) {
		background-color: #ffffff;
	}
	.catalogue > li > a > small {
		color: #999999;
	}
	.bouton-badge {
		cursor: pointer;
	}
	.bouton-badge::before {
		content: " " attr(data-badge) " ";
	}
</style>`);
	$('#popup').after(`<div class="modal hide fade ltr" id="popup_notifications">
<div class="modal-header">
	<a class="close" data-dismiss="modal">×</a>
	<h3>${translator.text('notifications')}</h3>
</div>
<div class="modal-body">
	<center>
		<b class="chargeur"></b>
	</center>
</div>
<div class="modal-footer">
	<label class="checkbox inline pull-left">
		<input type="checkbox" name="sons" id="sons">
		${translator.text('sounds')}
	</label>
	<button class="btn" data-dismiss="modal">${translator.text('close')}</button>
</div>
</div>`);
	$('#sons').prop('checked', application.account.settings.sounds).change(function () {
		application.account.settings.sounds = $(this).prop('checked');
	});
	$('.nav.ltr.pull-right > li:nth-child(1), .nav.rtl.pull-left > li:nth-last-child(2)').after(`<li>
<a class="bouton-badge" onclick="$('#popup_notifications').modal('show');">
	<img src="/img/sections/bulle-pointillets.png" class="img16 espace-2-2">
</a>
</li>`);
	$('.bouton-badge').attr('data-badge', application.account.pending || null).click(function () {
		application.account.pending = 0;
		$(this).removeAttr('data-badge');
	});
	application.getNotifications();
	setInterval(application.getNotifications.bind(application), 60000);
	window.onbeforeunload = function () {
		localStorage.setItem(key, JSON.stringify(application.account));
	};
});